from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models import IntegerField, BooleanField, ForeignKey
from django.db.models.fields import CharField


class OccupancyChoices(models.TextChoices):
    VERY_LOW = ('VL', 'Very Low')
    LOW = ('L', 'Low')
    MEDIUM = ('M', 'Medium')
    HIGH = ('H', 'High')
    VERY_HIGH = ('VH', 'Very High')


class BusLine(models.Model):
    line_number = IntegerField(null=True, blank=False, default=-1)
    direction = CharField(max_length=64)


class BaseFeedback(models.Model):
    bus_line = ForeignKey(BusLine,
                          related_name='+',
                          on_delete=models.CASCADE)
    time_stamp = models.DateTimeField(null=True, blank=False, default=-1)

    class Meta:
        abstract = True


class Occupancy(BaseFeedback):
    occupancy_rating = CharField(null=False,
                          blank=False,
                          choices = OccupancyChoices,
                          default = 'Medium',
                          max_length=64)


class Box(BaseFeedback):
    bike_count = IntegerField(null=False,
                              blank=False,
                              default=1,
                              validators=[MinValueValidator(0), MaxValueValidator(4)])
    wheelchair_or_pram = BooleanField(null=False,
                                      blank=False,
                                      default=False)

    def clean(self):
        if self.wheelchair_or_pram and self.bike_count:
            raise ValidationError("Bike is not allowed with wheelchair or pram.")



class Changeover(BaseFeedback):
    to_line = ForeignKey(BusLine,
                         related_name='+',
                         on_delete=models.CASCADE)
    changeover_managed = BooleanField(null=False, blank=False, default=True)


class OnTime(BaseFeedback):
    on_time = BooleanField(default=True)


class UserCredits(models.Model):
    user_id = IntegerField(null=False,
                           blank=False,
                           default=0)
    credits = IntegerField(null=False,
                              blank=False,
                              default=0,
                              validators=[MinValueValidator(0)])


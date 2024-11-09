from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.db.models import IntegerField, BooleanField
from django.db.models.fields import CharField


class OccupancyChoices(models.TextChoices):
    VERY_LOW = ('VL', 'Very Low')
    LOW = ('L', 'Low')
    MEDIUM = ('M', 'Medium')
    HIGH = ('H', 'High')
    VERY_HIGH = ('VH', 'Very High')


class BoxPositions(models.TextChoices):
    MIDDLE = ('M', 'Middle')
    BACK = ('B', 'Back')


class BaseFeedback(models.Model):
    bus_line = IntegerField(null=False, blank=False)
    time_stamp = models.DateTimeField(null=False, blank=False)


class Occupancy(BaseFeedback):
    occupancy_rating = CharField(null=False,
                          blank=False,
                          choices = OccupancyChoices,
                          default = 'Medium',
                          max_length=64)


class BikeSlot(BaseFeedback):
    box_count = IntegerField(null=False,
                             blank=False,
                             default=1,
                             validators=[MinValueValidator(0), MaxValueValidator(2)])
    bike_count = IntegerField(null=False,
                              blank=False,
                              default=1,
                              validators=[MinValueValidator(0), MaxValueValidator(4)])


class PramSlot(BaseFeedback):
    box_count = IntegerField(null=False,
                             blank=False,
                             default=0,
                             validators=[MinValueValidator(0), MaxValueValidator(2)])
    pram_count = IntegerField(null=False,
                              blank=False,
                              default=0,
                              validators=[MinValueValidator(0), MaxValueValidator(4)])


class Box(BaseFeedback):
    box_positions = CharField(null=False,
                              blank=False,
                              choices=BoxPositions,
                              default='MIDDLE',
                              max_length=64)
    bike_count = IntegerField(null=False,
                              blank=False,
                              default=1,
                              validators=[MinValueValidator(0), MaxValueValidator(4)])
    pram_count = IntegerField(null=False,
                              blank=False,
                              default=0,
                              validators=[MinValueValidator(0), MaxValueValidator(4)])
    wheel_chair_count = IntegerField(null=False,
                              blank=False,
                              default=0,
                              validators=[MinValueValidator(0), MaxValueValidator(4)])

    def clean(self):
        if (self.pram_count or self.wheel_chair_count) and self.bike_count:
            raise ValidationError("Bike is not allowed with wheelchair or pram.")



class Changeover(BaseFeedback):
    to_line = IntegerField(null=False, blank=False)
    changeover_managed = BooleanField(null=False, blank=False, default=True)


class OnTime(BaseFeedback):
    on_time = BooleanField(default=True)




# Generated by Django 5.1.3 on 2024-11-09 11:10

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BaseFeedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bus_line', models.IntegerField()),
                ('time_stamp', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='BikeSlot',
            fields=[
                ('basefeedback_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='swifttransit.basefeedback')),
                ('box_count', models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(2)])),
                ('bike_count', models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(4)])),
            ],
            bases=('swifttransit.basefeedback',),
        ),
        migrations.CreateModel(
            name='Box',
            fields=[
                ('basefeedback_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='swifttransit.basefeedback')),
                ('box_positions', models.CharField(choices=[('M', 'Middle'), ('B', 'Back')], default='MIDDLE', max_length=64)),
                ('bike_count', models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(4)])),
                ('pram_count', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(4)])),
                ('wheel_chair_count', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(4)])),
            ],
            bases=('swifttransit.basefeedback',),
        ),
        migrations.CreateModel(
            name='Changeover',
            fields=[
                ('basefeedback_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='swifttransit.basefeedback')),
                ('to_line', models.IntegerField()),
                ('changeover_managed', models.BooleanField(default=True)),
            ],
            bases=('swifttransit.basefeedback',),
        ),
        migrations.CreateModel(
            name='Occupancy',
            fields=[
                ('basefeedback_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='swifttransit.basefeedback')),
                ('occupancy_rating', models.CharField(choices=[('VL', 'Very Low'), ('L', 'Low'), ('M', 'Medium'), ('H', 'High'), ('VH', 'Very High')], default='Medium', max_length=64)),
            ],
            bases=('swifttransit.basefeedback',),
        ),
        migrations.CreateModel(
            name='OnTime',
            fields=[
                ('basefeedback_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='swifttransit.basefeedback')),
                ('on_time', models.BooleanField(default=True)),
            ],
            bases=('swifttransit.basefeedback',),
        ),
        migrations.CreateModel(
            name='PramSlot',
            fields=[
                ('basefeedback_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='swifttransit.basefeedback')),
                ('box_count', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(2)])),
                ('pram_count', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(4)])),
            ],
            bases=('swifttransit.basefeedback',),
        ),
    ]
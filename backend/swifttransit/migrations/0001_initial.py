# Generated by Django 5.1.3 on 2024-11-09 14:52

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BusLine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('line_number', models.IntegerField(default=-1, null=True)),
                ('direction', models.CharField(max_length=64)),
            ],
            options={
                'constraints': [models.UniqueConstraint(fields=('line_number', 'direction'), name='line_direction')],
            },
        ),
        migrations.CreateModel(
            name='Box',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_stamp', models.DateTimeField(default=-1, null=True)),
                ('bike_count', models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(4)])),
                ('wheelchair_or_pram', models.BooleanField(default=False)),
                ('bus_line', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='swifttransit.busline')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Changeover',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_stamp', models.DateTimeField(default=-1, null=True)),
                ('changeover_managed', models.BooleanField(default=True)),
                ('bus_line', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='swifttransit.busline')),
                ('to_line', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='swifttransit.busline')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Occupancy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_stamp', models.DateTimeField(default=-1, null=True)),
                ('occupancy_rating', models.CharField(choices=[('VL', 'Very Low'), ('L', 'Low'), ('M', 'Medium'), ('H', 'High'), ('VH', 'Very High')], default='Medium', max_length=64)),
                ('bus_line', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='swifttransit.busline')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OnTime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_stamp', models.DateTimeField(default=-1, null=True)),
                ('on_time', models.BooleanField(default=True)),
                ('bus_line', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='swifttransit.busline')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

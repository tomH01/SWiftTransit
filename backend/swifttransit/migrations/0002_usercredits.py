# Generated by Django 5.1.3 on 2024-11-09 15:16

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('swifttransit', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserCredits',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(default=0)),
                ('credits', models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)])),
            ],
        ),
    ]

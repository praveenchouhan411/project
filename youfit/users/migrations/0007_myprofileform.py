# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2018-01-26 15:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_detail_city'),
    ]

    operations = [
        migrations.CreateModel(
            name='MyProfileForm',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('user_fullname', models.CharField(default=1, max_length=100)),
                ('user_mail_id', models.CharField(max_length=100)),
                ('user_mobile', models.CharField(default=0, max_length=100)),
                ('location', models.CharField(default='Enter Location', max_length=200)),
                ('building_name', models.CharField(default='Enter Building Name', max_length=200)),
                ('landmark', models.CharField(default='Enter Landmark', max_length=200)),
                ('pincode', models.CharField(default='Enter Pincode', max_length=200)),
            ],
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-07-20 06:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('message', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='like',
            name='like',
            field=models.BooleanField(),
        ),
    ]

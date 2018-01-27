# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django import forms

from django.db import models
from datetime import datetime

# Create your models here.

# This is first dumy model for this project
"""
class UserRegistration(models.Model):
	id = models.AutoField(primary_key=True)	
	username = models.CharField(max_length=100)
	password = models.CharField(max_length=100)
	confirm_password = models.CharField(max_length=100, blank=False)	
	email_id = models.CharField(max_length=100, blank=False)	
		
	def __str__(self):
		return self.username
"""

# Model for Registration of Fitnesspoint


class Registration(models.Model):
	user_id = models.AutoField(primary_key=True)
	user_fullname = models.CharField(max_length=100)
	user_mail_id = models.CharField(max_length=100)
	user_password = models.CharField(max_length=100)

	def __str__(self):
		return self.user_fullname


class MyProfileForm(models.Model):
	user_id = models.AutoField(primary_key=True)
	
	user_fullname = models.CharField(max_length=100, default=1, verbose_name = 'kjkjkjkj')
	user_mail_id = models.CharField(max_length=100)
	user_mobile = models.CharField(max_length=100, default=0)
	location = models.CharField(max_length=200, default='Enter Location')
	building_name = models.CharField(max_length=200, default='Enter Building Name')
	landmark = models.CharField(max_length=200, default='Enter Landmark')
	pincode = models.CharField(max_length=200, default='Enter Pincode')
	

	def __str__(self):
		return self.user_fullname

	#user_password = models.CharField(max_length=100)

#Model for City Name:

#Model for GYM Details in city

class Detail(models.Model):
	id = models.AutoField(primary_key=True)
	city = models.CharField(max_length=100)
	name = models.CharField(max_length=100)
	area = models.CharField(max_length=100)
	location = models.CharField(max_length=100)
	user_rating = models.CharField(max_length=100)
	image_name = models.CharField(max_length=100)

	def __str__(self):
		return self.area

class Post(models.Model):
	post_name = models.CharField(max_length=100)
	#lastname = models.CharField(max_length=100)
	post_id = models.IntegerField()
    	
	def __str__(self):
		return self.post_name

class Choice(forms.Form):
       CHOICES = (('1', 'First',), ('2', 'Second',))
       choice_field = forms.ChoiceField(widget=forms.Select, choices=CHOICES)




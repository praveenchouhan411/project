# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from datetime import datetime

# Create your models here.
class employees(models.Model):
	firstname = models.CharField(max_length=100)
	lastname = models.CharField(max_length=100)
	emp_id = models.IntegerField()
        date = models.DateTimeField(default=datetime.now, blank=True)

	def __str__(self):
		return self.firstname


class student(models.Model):
	firstname = models.CharField(max_length=100)
	lastname = models.CharField(max_length=100)
	emp_id = models.IntegerField()
        date = models.DateTimeField(default=datetime.now, blank=True)

	def __str__(self):
		return self.firstname

class Post(models.Model):
	post_name = models.CharField(max_length=100)
	#lastname = models.CharField(max_length=100)
	post_id = models.IntegerField()
    	
	def __str__(self):
		return self.post_name


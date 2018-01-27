# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Register your models here.
from django.contrib import admin

from . models import Post 
from . models import student
admin.site.register(student)
admin.site.register(Post)


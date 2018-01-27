# -*- coding: utf-8 -*-
from __future__ import unicode_literals
#from django.template import resolve_variable

from django.template import *
from django.shortcuts import render, render_to_response
from django.template.response import TemplateResponse

from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth 
from django.views.decorators import csrf
from django.views.decorators.csrf import csrf_protect

from django.contrib.auth.forms import UserCreationForm
from django.template.loader import render_to_string
from users.models import Detail
from users.forms import MyYoufitProfileForm
import sys
sys.path.insert(0,'parser/directory')
from parser import *

from django.contrib.auth.forms import (
    AuthenticationForm, PasswordChangeForm, PasswordResetForm, SetPasswordForm,
)

"""
def userview(request):
	user = "PSC"
	html = "<html><body>This is %s </body></html>" %user
	return RenderResponse(html)

def test(request):
	test = "PaHuuuuuuu"
	html = "<html><body>Test Username is %s </body></html>" % test
	return HttpResponse(html)

def test2(request):
	#test = "Test View"
	#args = request.GET.get("city")
	#print request.GET.get('city', '')

	return HttpResponse("Hello")	

"""


def homepage(request, city="", authentication_form=AuthenticationForm):

	form = authentication_form(request, data=request.POST)
	data = Detail.objects.all()
	p = Detail.objects.get(id=1)
	city = request.path
	city = city.strip("/")
	if city=="":
		city = "bangalore"

	print city
	print "Test homepage"
	language = "en-gb"
	session_language = "en-gb"

	if 'lang' in request.COOKIES:
		language = request.COOKIES['lang']

	print language

	return TemplateResponse(request, 'homepage.html', {"data": data, "city": city, 'form': form} )


def gyms(request, city=""):
	
	data = Detail.objects.all()
    	ct = Detail.objects.raw('select * from users_detail;')
    	print ct
	data = Detail.objects.all()
	city = city.lower()
	
	print request.GET
	t = 0

	myString = "THis is a python string"
	
	print "Test homepage"
	language = "en-gb"
	session_language = "en-gb"

	print session_language
	
	if 'lang' in request.COOKIES:
		language = request.COOKIES['lang']

	return TemplateResponse(request, 'gyms.html', { "data": data, "city": city, "t": t , "image": "A"})
	#return HttpResponse(request.POST.get('city', ''))


def loggedin(request):
	button_value , button_function = "PROFILE", "profile_popup"
	return TemplateResponse(request, 'homepage.html', {'username': request.user.username, 'button_value': button_value, 'button_function': button_function })	

def profile(request):
	""" Profile Template """
	print request.user.id

	if request.POST:
		form = MyYoufitProfileForm(request.POST)
		if form.is_valid():
			form.save()

			return TemplateResponse(request, 'profile.html')
	else:
		form = MyYoufitProfileForm()

	return TemplateResponse(request, 'profile.html', { 'username': request.user.username, 'form': form } )




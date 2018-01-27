# -*- coding: utf-8 -*-


#Serializer or REST Framework API Views

# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect 

from rest_framework import serializers
from rest_framework import viewsets

from users.models import Post, Detail
from users.serializers import PostSerializer
from users.serializers import DetailSerializer


def test(request):
	text = "Praveen"
	html = "<html><body>Hi %s this seems to be worked</body></html>" % text
	return HttpResponse(html)

class PostViewSet(viewsets.ModelViewSet):
	queryset = Post.objects.all()
	serializer_class = PostSerializer

class DetailViewSet(viewsets.ModelViewSet):
	queryset = Detail.objects.all()
	serializer_class = DetailSerializer

"""
from __future__ import unicode_literals

from django.shortcuts import render

from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth 
from django.views.decorators import csrf
from django.views.decorators.csrf import csrf_protect

from django.middleware.csrf import get_token


from django.contrib.auth.forms import UserCreationForm
from forms import RegistrationForm

import sys
sys.path.insert(0,'parser/directory')
from parser import *


#from django.views.generic.base import TemplateView
#from django.views.generic import TemplateView

# Create your views here.

"""
"""
def userview(request):
	user = "PSC"
	html = "<html><body>This is %s </body></html>" %user
	return RenderResponse(html)


def test(request):
	test = "PaHuuuuuuu"
	html = "<html><body>Test Username is %s </body></html>" % test
	return HttpResponse(html)
"""


"""
def userregistration(request):
	if request.POST:
		form = RegistrationForm(request.POST)
		if form.is_valid():
		    form.save()
		    #return False
		    return HttpResponse("Registration is done successfully")
	else:
		form = RegistrationForm()
		 
	arg = {}
	arg = get_token(request)
	#args = parser.parse_args()
	args = {}
	#args.update(csrf(request))

	args['form'] = form
	print args

	return render(request, 'register.html', args)

def register_success(request):
	return render_to_resoponse("register_sucess.html")


"""



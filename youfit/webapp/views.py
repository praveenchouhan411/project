# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect 

from rest_framework import serializers
from rest_framework import viewsets

from webapp.models import Post
from webapp.serializers import PostSerializer



def test(request):
	text = "Praveen"
	html = "<html><body>Hi %s this seems to be worked</body></html>" % text
	return HttpResponse(html)


class PostViewSet(viewsets.ModelViewSet):
	queryset = Post.objects.all()
	serializer_class = PostSerializer

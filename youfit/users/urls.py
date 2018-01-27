"""fitnesspoint URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf.urls import url, include
from rest_framework import routers
#from django.contrib.auth.forms import UserCreationForm
import users
#from users import views

#from django.conf.urls import url, include
from rest_framework import routers

from users import views

#from webapp import views

#api router
router = routers.DefaultRouter()
router.register(r'posts', views.PostViewSet)
router.register(r'details', views.DetailViewSet)


urlpatterns = [
    
    url(r'^api/', include(router.urls)),
    url(r'^test/$', views.test, name='test'),  

    
]


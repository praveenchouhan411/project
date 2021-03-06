"""youfit URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
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


#from django.contrib.auth.views import login

from registration.backends import hmac
from registration.backends.hmac import urls
from django.contrib.auth.decorators import login_required


from django.conf.urls import url, include
#from youfit.youfit.views import views
import youfit
import users
from users import views
from youfit import views
from django.contrib import admin

#import registration

from django.conf import settings
from django.views.generic.base import TemplateView
from views import *
#import registration

from django.contrib.auth.views import login
#import registration


urlpatterns = [
    #login URL Path #/home/praveen/Documents/python/my-project/local/lib/python2.7/site-packages/registration/auth_urls_functions.py
    url(r'^youfit/', include('registration.backends.hmac.urls')),
    #https://stackoverflow.com/questions/23772001/redirect-after-login-simply-appends-login-redirect-url
    #https://stackoverflow.com/questions/16901970/django-register-and-login-explained-by-example
    
    url(r'^youfit/loggedin/$', youfit.views.loggedin),
    url(r'^youfit/profile/$', login_required(youfit.views.profile)),
    #url(r'^$', youfit.views.homepage),
    url(r'^youfit/(?i)(?P<city>\w+)/gyms$', youfit.views.gyms),
    
    url(r'^users/', include('users.urls')),
    url(r'^admin/', admin.site.urls),]
    #url(r'^test/$', youfit.views.test),
    #url(r'^test2/$', youfit.views.test2),


    #url(r'^city=[*\w]', youfit.views.city),
    #url(r'^?[A-Z,a-z]', youfit.views.city),
    #url(r'^\w+/', youfit.views.test2),
    #url(r'^(?P<city>[*+*\w]+)$', youfit.views.test2),
    #url(r'^/(?P<param>\d+)$', redirect_to, {'url': '/%(param)s/resource'}),
    #url(r'^user/(?P<username>\w{0,50})/$', views.profile_page),
    #url(r'^webapp/', include('webapp.urls')),
    
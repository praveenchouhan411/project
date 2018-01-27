from rest_framework import serializers
from webapp.models import employees
from webapp.models import student
from webapp.models import Post

class employeesSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = employees
		fields = ('firstname','lastname')
		#fields='__all__'


class studentSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = student
		fields = ('firstname','lastname')
		#fields = '__all__'
	
"""class ZipSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = student
		fields = ('firstname','lastname')
		#fields = '__all__'
"""

class PostSerializer(serializers.ModelSerializer):

	class Meta:
		model = Post
		fields = ('post_name', 'post_id')

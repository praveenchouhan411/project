from rest_framework import serializers
from users.models import Detail, Post, Registration
#from webapp.models import student
#from webapp.models import Post

"""
class DetailSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Detail
		fields = ('firstname','lastname')
		#fields='__all__'


class studentSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = student
		fields = ('firstname','lastname')
		#fields = '__all__'
"""

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

class DetailSerializer(serializers.ModelSerializer):

	class Meta:
		model = Detail
		fields = ('name', 'area', 'location', 'user_rating', 'image_name')



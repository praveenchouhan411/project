#Com ment Old 
from django import forms

from django.forms import ModelForm 
from users.models import Registration, MyProfileForm

"""
class RegistrationForm(ModelForm):
    
    class Meta:
        model = Registration
        fields = ('user_fullname', 'user_password')

    def save(self, commit=True):
	user = super(ModelForm, self).save(commit=False)
	
	if commit:
	   user.save()
	
	return user
   
class Choice(forms.Form):
       CHOICES = (('Bangalore', 'Bangalore',), ('Delhi', 'Delhi'), ('Pune', 'Pune'), ('Mumbai', 'Mumbai'))
       city = forms.ChoiceField(widget=forms.Select(attrs={'class':'city-dropdown', 'target': '_blank'}), choices=CHOICES, label='')

"""

class MyYoufitProfileForm(forms.ModelForm):

	class Meta:
		model = MyProfileForm

		#user_id = models.AutoField(primary_key=True)
		#user_fullname = forms.CharField(max_length=100)
		#user_mail_id = forms.CharField(max_length=100)
		#user_fullname = forms.CharField(widget=forms.CharField(attrs={'placeholder':'Enter Name'}))
		fields = ('user_fullname', 'user_mail_id', 'user_mobile', 'location', 'building_name', 'landmark', 'pincode')

	"""
	def save(self, commit=True):
		profile = super(MyProfileForm, self).save(commit=False)

		if commit:
			profile.save()

		return profile
	"""



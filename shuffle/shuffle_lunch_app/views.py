from django.shortcuts import render
from .models import Member

def teams(request):
    members = Member.objects.all()
    return render(request, 'shuffle_lunch_app/teams.html', {'members' : members})
# Create your views here.

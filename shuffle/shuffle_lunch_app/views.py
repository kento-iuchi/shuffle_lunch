from django.shortcuts import render
from .models import Member

def teams(request):
    members = Member.objects.all()
    return render(request, 'shuffle_lunch_app/teams.html', {'members' : members})

def organize_team(request):
    return 0s
# Create your views here.

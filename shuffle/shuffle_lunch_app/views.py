from django.shortcuts import render
from .models import Member

def teams(request):
    members = Member.objects.all()
    return render(request, 'shuffle_lunch_app/teams.html', {'members' : members})

def organize_teams(request):
    import json
    from django.http import HttpResponse,Http404

    response = json.dumps({'your_surprise_txt':'aaa',})
    return HttpResponse(response, content_type = "text/javascript")
# Create your views here.

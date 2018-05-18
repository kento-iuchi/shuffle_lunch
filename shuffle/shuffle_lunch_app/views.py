from django.shortcuts import render
from .models import Member

# def info(msg):
#     logger = logging.getLogger('command')
#     logger.info(msg)

def teams(request):
    members = Member.objects.all()
    return render(request, 'shuffle_lunch_app/teams.html', {'members' : members})

def organize_teams(request):
    import json
    from django.http import HttpResponse,Http404
    # info(request);
    print(len(request.POST))
    # print(request.method) POST
    # .get("test")

    members = Member.objects.all()
    print(members[0].can_go)
    if members[0].can_go == True :
        members[0].can_go == False
    else :
        members[0].can_go == True

    response = json.dumps({'your_surprise_txt':'aaa',})
    return HttpResponse(response, content_type = "text/javascript")

# Create your views here.

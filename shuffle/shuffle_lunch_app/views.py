from django.shortcuts import render
from .models import Member

def teams(request):
    members = Member.objects.order_by('id').all()
    return render(request, 'shuffle_lunch_app/teams.html', {'members' : members})

def change(request):
    import json
    from django.http import HttpResponse,Http404

    print(request);
    member_id = int(request.POST['id'])
    member = Member.objects.get(id=member_id)
    member.toggle_can_go()
    print(member.can_go)

    response = json.dumps({'can_go':member.can_go,})
    return HttpResponse(response, content_type = "text/javascript")

def organize_teams(request):
    import json
    from django.http import HttpResponse,HttpRequest,Http404

    members = Member.objects.filter(can_go=True)
    print(members)
    print(request.POST);
    print(request.method)

    response = json.dumps({'can_go':'test',})
    return HttpResponse(response, content_type = "text/javascript")

# Create your views here.

from django.shortcuts import render
from .models import Member

def teams(request):
    members = Member.objects.order_by('id').all()
    return render(request, 'shuffle_lunch_app/teams.html', {'members' : members})

def change(request):
    import json
    from django.http import HttpResponse,Http404

    member_id = int(request.POST['id'])
    member = Member.objects.get(id=member_id)
    member.toggle_can_go()

    response = json.dumps({'can_go':member.can_go,})
    return HttpResponse(response, content_type = "text/javascript")

def organize_teams(request):
    import json
    from django.http import HttpResponse,HttpRequest,Http404
    import random

    members = Member.objects.filter(can_go=True)
    members_count = len(members)
    teams_count = int(request.POST['teams_count'])
    if members_count < teams_count:
        response = json.dumps({'error':'Lack of participants'})
        return HttpResponse(response, content_type = "text/javascript")
    can_go_members = []
    for member in members:
        can_go_members.append(member.name)

    teams = []
    for t_i in range(teams_count):
        team = []
        teams.append(team)
    random.shuffle(can_go_members)
    for m_i, member in enumerate(can_go_members):
        team_number = m_i % teams_count
        teams[team_number].append(member)

    response = json.dumps({'teams':teams,})
    return HttpResponse(response, content_type = "text/javascript")

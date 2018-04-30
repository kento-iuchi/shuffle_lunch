from django.shortcuts import render
def teams(request):
    return render(request, 'shuffle_lunch_app/teams.html', {})
# Create your views here.

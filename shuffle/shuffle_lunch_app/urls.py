from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.teams, name='teams'),
    url(r'^change/', views.change, name='change'),
    url(r'^organize/', views.organize_teams, name='organize_teams'),
]

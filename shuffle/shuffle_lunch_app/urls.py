from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.teams, name='teams'),
    url(r'^change/', views.change, name='change'),
]

from django.db import models

# Create your models here.
class Member(models.Model):
    name = models.CharField(max_length=200)
    can_go = models.BooleanField(default = True)

    def __str__(self):
        return self.name

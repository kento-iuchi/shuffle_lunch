from django.db import models
import uuid

# Create your models here.
class Member(models.Model):
    # id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    can_go = models.BooleanField(default = True)

    def __str__(self):
        return self.name

    def toggle_can_go(self):
        self.can_go ^= True
        self.save()

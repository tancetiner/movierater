from dataclasses import field
from rest_framework.serializers import ModelSerializer
from .models import User, Movie, Save, Rate


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class MovieSerializer(ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"


class SaveSerializer(ModelSerializer):
    class Meta:
        model = Save
        fields = "__all__"


class RateSerializer(ModelSerializer):
    class Meta:
        model = Rate
        fields = "__all__"

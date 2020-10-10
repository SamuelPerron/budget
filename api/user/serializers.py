from rest_framework import serializers
from django.contrib.auth import get_user_model
from drf_writable_nested import WritableNestedModelSerializer


class UserSerializer(WritableNestedModelSerializer):
    email = serializers.CharField(required=True)

    class Meta:
        model = get_user_model()
        fields = ['pk', 'username', 'email', 'is_staff', 'password',]
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = get_user_model()(**validated_data)
        user.set_password(password)
        user.save()
        return user

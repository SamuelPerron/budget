from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token

from .serializers import BudgetSerializer
from .models import Budget
from .permissions import IsBudgetOwner

class BudgetViewSet(viewsets.ModelViewSet):
    permission_classes = [IsBudgetOwner]

    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer

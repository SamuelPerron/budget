from rest_framework.permissions import BasePermission


class IsBudgetOwner(BasePermission):
    # for view permission
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated

    # for object level permissions
    def has_object_permission(self, request, view, budget):
        return budget.user.id == request.user.id

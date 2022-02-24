from django.shortcuts import render
from itsdangerous import Serializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from .models import User
from rest_framework import status

@api_view(['GET'])
def hello(request):
    return Response('Hello World!')

@api_view(['GET', 'POST'])
def user(request): 
    if request.method == 'GET':
        UserList = User.objects.all()
        serializer = UserSerializer(UserList, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        print(data)
        if len(User.objects.filter(username=data['username'])) == 1:
            theUser = User.objects.get(username=data['username'])
            if theUser.password == data['password']:
                return Response(UserSerializer(User.objects.get(username=data['username'])).data, status=status.HTTP_200_OK)
            else:
                return Response({"Error": "Password is not correct!"}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            response = Response({"Error": "User not found!"}, status=status.HTTP_404_NOT_FOUND)
            print(response)
            return response

@api_view(['POST'])
def register(request):
    data = request.data
    User.objects.create(
        username=data['username'], 
        password=data['password']
    )

    serializer = UserSerializer(User.objects.all(), many=True)
    return Response(serializer.data)


@api_view(['POST'])
def deleteUser(request):
    id = request.data['id']
    User.objects.get(id=id).delete()
    
    serializer = UserSerializer(User.objects.all(), many=True)
    return Response(serializer.data)












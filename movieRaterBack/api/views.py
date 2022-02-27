from django.shortcuts import render
from numpy import var
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import RateSerializer, UserSerializer, MovieSerializer, SaveSerializer
from .models import User, Movie, Save, Rate
from rest_framework import status
import json


@api_view(["GET"])
def hello(request):
    return Response("Hello World!")


def assignJSONValue(value, varType):
    if value == "":
        if varType == "str":
            return "Not specified"
        elif varType == "num":
            return -1

    return value


def getRuntime(value):
    idx = value.index(" ")
    return value[:idx]


@api_view(["GET", "POST"])
def user(request):
    if request.method == "GET":
        UserList = User.objects.all()
        serializer = UserSerializer(UserList, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        data = request.data
        print(data)
        if len(User.objects.filter(username=data["username"])) == 1:
            theUser = User.objects.get(username=data["username"])
            if theUser.password == data["password"]:
                return Response(
                    UserSerializer(User.objects.get(username=data["username"])).data,
                    status=status.HTTP_200_OK,
                )
            else:
                return Response(
                    {"Error": "Password is not correct!"},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
        else:
            response = Response(
                {"Error": "User not found!"}, status=status.HTTP_404_NOT_FOUND
            )
            print(response)
            return response


@api_view(["POST"])
def register(request):
    data = request.data
    User.objects.create(username=data["username"], password=data["password"])

    serializer = UserSerializer(User.objects.all(), many=True)
    return Response(serializer.data)


@api_view(["POST"])
def deleteUser(request):
    id = request.data["id"]
    User.objects.get(id=id).delete()

    serializer = UserSerializer(User.objects.all(), many=True)
    return Response(serializer.data)


@api_view(["GET"])
def movies(request):
    if request.method == "GET":
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET", "POST"])
def save(request):
    if request.method == "GET":
        saves = Save.objects.all()
        serializer = SaveSerializer(saves, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == "POST":
        data = request.data
        print(data)
        print("Type of the input: ", type(data))
        movieData = json.loads(data["movie"])
        username = data["username"]
        print("Type of the moviedata:", type(movieData))
        print("Moviedata:", movieData)
        print("Type of the username:", type(username))

        if len(Movie.objects.filter(name=str(movieData["name"]))) == 0:
            Movie.objects.create(
                name=assignJSONValue(movieData["name"], "str"),
                director=assignJSONValue(movieData["director"], "str"),
                rating=assignJSONValue(movieData["imdbRating"], "num"),
                year=assignJSONValue(movieData["releaseYear"], "num"),
                metaScore=assignJSONValue(movieData["metaScore"], "num"),
                overview=assignJSONValue(movieData["overview"], "str"),
                runtime=assignJSONValue(getRuntime(movieData["runtime"]), "num"),
                genre=assignJSONValue(movieData["genre"], "str"),
            )

        movie = Movie.objects.get(name=movieData["name"])
        Save.objects.create(username=username, movieId=movie.id)

        return Response(
            SaveSerializer(Save.objects.all(), many=True).data,
            status=status.HTTP_200_OK,
        )


@api_view(["GET", "POST"])
def rate(request):
    if request.method == "POST":
        data = request.data
        print(data)
        movieData = json.loads(data["movie"])
        username = data["username"]
        rating = int(data["rating"])

        if len(Movie.objects.filter(name=str(movieData["name"]))) == 0:
            Movie.objects.create(
                name=assignJSONValue(movieData["name"], "str"),
                director=assignJSONValue(movieData["director"], "str"),
                rating=assignJSONValue(movieData["imdbRating"], "num"),
                year=assignJSONValue(movieData["releaseYear"], "num"),
                metaScore=assignJSONValue(movieData["metaScore"], "num"),
                overview=assignJSONValue(movieData["overview"], "str"),
                runtime=assignJSONValue(getRuntime(movieData["runtime"]), "num"),
                genre=assignJSONValue(movieData["genre"], "str"),
            )

        movie = Movie.objects.get(name=movieData["name"])
        Rate.objects.create(username=username, movieId=movie.id, rating=rating)

    serializer = RateSerializer(Rate.objects.all(), many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

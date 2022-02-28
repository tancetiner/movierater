from django.urls import path
from . import views

urlpatterns = [
    path("", views.hello, name="hello"),
    path("/login", views.user, name="login"),
    path("/register", views.register, name="register"),
    path("/deleteUser", views.deleteUser, name="delete-user"),
    path("/movie", views.movies, name="movies"),
    path("/save", views.save, name="saves"),
    path("/rate", views.rate, name="ratings"),
    path("/saved", views.watchlist, name="watch-list"),
    path("/rated", views.ratingList, name="rating-list"),
    path("/deleteMovie", views.deleteFromWatchlist, name="delete-from-watchlist"),
]

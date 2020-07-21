from django.shortcuts import render
from django.http import HttpResponse 

# Create your views here.
def main_view(response):
    return render(response, "main/base.html", {})

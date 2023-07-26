## Instale o django REST
```bash
pip install djangorestframework
```

## Crie um novo projeto django
```bash
django-admin startproject mysite
```

## Crie um novo app
```bash
cd project_name
```

```bash
python manage.py startapp app_name
```

## Configure o django

- Abra o settings.py no diretório do projeto e adicione o app criado em INSTALLED_APPS
```python

INSTALLED_APPS = [
    'app_name',
    'rest_framework',

    ...
]
```

## Crie os modelos
- Abra o models.py no diretório do app e crie os modelos
```python
from django.db import models

class ModelName(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

```

## Crie as migrações
```bash
python manage.py makemigrations
python manage.py migrate
```

## Crie o arquivo serializers.py
- Abra o serializers.py no diretório do app e crie os serializers
```python
from rest_framework import serializers
from .models import ModelName

class ModelNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelName
        fields = '__all__'
```

## Crie o arquivo views.py
- Abra o views.py no diretório do app e crie as views
```python
from rest_framework import viewsets
from .models import ModelName
from .serializers import ModelNameSerializer

class ModelNameViewSet(viewsets.ModelViewSet):
    queryset = ModelName.objects.all()
    serializer_class = ModelNameSerializer
```

## Crie o arquivo urls.py
- Abra o urls.py no diretório do app e crie as urls
```python
from django.urls import path, include
from rest_framework import routers
from .views import ModelNameViewSet

router = routers.DefaultRouter()
router.register('model_name', ModelNameViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

# Rode o servidor de desenvolvimento
```bash
python manage.py runserver
```

Seu projeto django rest está pronto para ser consumido
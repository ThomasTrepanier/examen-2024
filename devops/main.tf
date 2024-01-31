terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
  host = "npipe:////.//pipe//docker_engine"
}

data "docker_image" "image" {
  name = "devops:latest"
}

resource "docker_container" "container" {
  name  = "devops"
  image = data.docker_image.image.id
  ports {
    internal = 8000
    external = 8000
  }
}
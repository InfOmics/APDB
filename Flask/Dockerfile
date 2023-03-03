# syntax=docker/dockerfile:1

# start by pulling the python image
FROM python:3.10-slim-bullseye

# create virtual env to install as sudo
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# update pip
RUN pip install --upgrade pip

# install libraries
RUN apt-get update && apt-get install -y libsm6 libxrender1 libxext6

# set the working directory to /apdb_app
WORKDIR /apdb_app

# copy the requirements file into the container
COPY requirements.txt requirements.txt

# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

# copy local directory contents into the container working directory
COPY . . 

# port
EXPOSE 5000

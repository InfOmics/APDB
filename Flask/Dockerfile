# syntax=docker/dockerfile:1

# start by pulling the python image
FROM python:3.10-alpine

# create virtual env to install as sudo
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# update pip
RUN pip install --upgrade pip

# set the working directory to /apdb_app
WORKDIR /apdb_app

# copy the current directory contents into the container at /apdb_app
COPY ./pollutants_db_app ./apdb_app

# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

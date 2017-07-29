# kube-demo

A really silly Hello-World demo using NodeJS, Express, Docker and Kubernetes.

## The Hello World Application

The Hello-World app is split into to two Express based Node servers. The World-Server returns the word 'World!' when poked, the Hello-Server returns the word Hello, plus the result of prodding the World-Server.

Note that the Hello-Server uses DNS to locate the World-Server, we'll see how that all works in a bit, when we put them both into a Kubernetes cluster. If you want to run the pair locally, just tweak your HOSTS file to include an entry mapping the world-service to localhost.

## Building the Docker images

Each of the Node services includes the files needed to create Docker containers to run them. Just run

docker build -t &lt;your tag here&gt; .

But you don't really need to do that unless your really want to, as the images are in public Docker Hub repos at

* gumshoe/hello-server
* gumshoe/world-server

The Kubernetes setup uses them when setting up the application in Kubernetes.

## Setting up Kubernetes

You can run this demo in any Kubernetes cluster (AWS, ACS etc.) or locally using MiniKube.

First off, deploy all the pods that you need using the two `deployment` scripts

* hello-server-deployment.yaml
* world-server-deployment.yaml

If all goes to plan you'll have ten pods up at this point, five of each container type.

Now we need a pair of services to map the pods to a fixed IP in the cluster so that they can be located (pods are ephemeral, services aren't), so run the two scripts

* hello-server-service.yaml
* world-server-service.yaml

Now we have the Hello-World app fully functional app in Kubernetes - yay! The only problem is the nothing outside the Kubernetes cluster can talk to it...

To fix this we need to set up an ingress service, so the outside world can talk to it. Time to run

* ingress.yaml




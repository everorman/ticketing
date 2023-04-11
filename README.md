# Ticketing - Udemy microservice practice

##### Google cloud connect

https://cloud.google.com/sdk/docs/install-sdk?hl=es-419

`gcloud auth login`

`gcloud init `

getting cluster credentials

`gcloud containet clusters get-credentials [cluster-name]`

maybe you might have this problem trying to get the credentials:

> CRITICAL: ACTION REQUIRED: gke-gcloud-auth-plugin, which is needed for continued use of kubectl, was not found or is not executable. Install gke-gcloud-auth-plugin for use with kubectl by following https://cloud.google.com/blog/products/containers-kubernetes/kubectl-auth-changes-in-gke

but you can fix it executing this command
`gcloud components install gke-gcloud-auth-plugin`

#### Steps to setup google cloud

- Enable google cloud build
- update the scaffold config to use google cloud build
- Setup ingress-nginx on our google cloud cluster
- restart skaffold

> Before to run the following commands, you must check that kubernates is looking to gcloud cluster and not to local cluster.
>
> [https://kubernetes.github.io/ingress-nginx/deploy](https://kubernetes.github.io/ingress-nginx/deploy)

Mandatory command to config nginx:

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.7.0/deploy/static/provider/cloud/deploy.yaml
```

command only for gcloud:

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.7.0/deploy/static/provider/cloud/deploy.yaml
```

When you setup nginx in gcloud it configs a load balancer automatically, you can check this in Networks services and see inside of load balancer

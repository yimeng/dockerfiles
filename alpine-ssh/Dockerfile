FROM alpine:3.9
COPY repositories /etc/apk/repositories
RUN apk update && apk add openssh-server python bind-tools --no-cache && \
    rm -rf /var/cache/apk/* /tmp/* && \
    ssh-keygen -A && passwd -d root 
COPY id_rsa.pub /root/.ssh/authorized_keys
EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]

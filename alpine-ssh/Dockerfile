FROM alpine:3.12
COPY repositories /etc/apk/repositories
RUN apk update && apk add openssh-server jq mtr curl httpie bind-tools bind-tools tcpdump rsync util-linux pssh whois tcpflow socat openssl iptraf-ng iftop nload iperf ipcalc openssh-client --no-cache && \
    rm -rf /var/cache/apk/* /tmp/* && \
    ssh-keygen -A && passwd -d root 
ADD https://github.com/yimeng.keys /root/.ssh/authorized_keys
EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]

function FindProxyForURL(url, host) {
    // 휴대폰 핫스팟 대역인지 확인 (192.168.49.x)
    // 192.168.49.0 / 255.255.255.0
    if (isInNet(myIpAddress(), "192.168.49.0", "255.255.255.0")) {
        // 휴대폰 핫스팟에 연결된 경우, 프록시 사용
        return "PROXY 192.168.49.1:8228";
    }
    // 그 외의 경우 직접 연결
    return "DIRECT";
}

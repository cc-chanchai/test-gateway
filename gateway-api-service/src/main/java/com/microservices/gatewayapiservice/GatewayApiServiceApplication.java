package com.microservices.gatewayapiservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class GatewayApiServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApiServiceApplication.class, args);
	}

}

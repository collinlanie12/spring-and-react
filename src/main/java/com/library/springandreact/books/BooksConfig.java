package com.library.springandreact.books;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BooksConfig {

    @Bean
    CommandLineRunner commandLineRunner(BooksRepository repository) throws Exception {
        return args -> {

         };
    }
}

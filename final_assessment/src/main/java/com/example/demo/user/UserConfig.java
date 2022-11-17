package com.example.demo.user;

import java.util.Arrays;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {

    //Sample entry - used to test the connection to the database
    //@Bean
    CommandLineRunner commandLineRunner (UserRepository repository){
        return args -> {
            User user1 = new User("Dainius", "Kirylo", "087 7089107", "solera@solera.com");


        repository.saveAll(
            Arrays.asList(user1));
        };

        }
}



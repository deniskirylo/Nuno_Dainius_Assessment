package com.example.demo.user;

import java.util.List;

public interface UserServiceInterface {

    public User saveUser(User user);
    public List<User> getAllUsers();
    public User getUser(long id);
    public void deleteUser(long id);
    public void updateUser(User user);

}

package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 全ユーザー取得
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ユーザー取得（ID指定）
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // ユーザー作成
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // ユーザー更新
    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());

        return userRepository.save(user);
    }

    // ユーザー削除
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
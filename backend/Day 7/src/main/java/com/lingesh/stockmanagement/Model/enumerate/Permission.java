package com.lingesh.stockmanagement.Model.enumerate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {
    ADMIN_READ("ADMIN:read"),
    ADMIN_UPDATE("ADMIN:update"),
    ADMIN_CREATE("ADMIN:create"),
    ADMIN_DELETE("ADMIN:delete"),
    USER_READ("USER:read"),
    USER_UPDATE("USER:update"),
    USER_CREATE("USER:create"),
    USER_DELETE("USER:delete");

    @Getter
    private final String permission;
}

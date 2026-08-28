---
name: commit
description: Quick commit all changes with auto-generated message
user_invocable: true
---

# Commit Skill

Быстрый коммит всех изменений.

## Инструкции

1. `git diff --stat` — кратко посмотри что изменилось (только stat, не весь diff)
2. `git log --oneline -3` — посмотри стиль последних коммитов
3. `git add -A` — добавь все файлы
4. Сгенерируй короткое сообщение коммита на английском (1 строка, до 72 символов), отражающее суть изменений
5. Сделай коммит:
```
git commit -m "$(cat <<'EOF'
<message>

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"
```
6. Покажи результат `git log --oneline -1`

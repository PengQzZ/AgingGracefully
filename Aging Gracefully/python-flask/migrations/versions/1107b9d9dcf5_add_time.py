"""add time

Revision ID: 1107b9d9dcf5
Revises: 
Create Date: 2023-08-16 19:25:56.356428

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '1107b9d9dcf5'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('static', schema=None) as batch_op:
        batch_op.alter_column('lmage',
               existing_type=mysql.VARCHAR(length=6000),
               type_=sa.String(length=360),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('static', schema=None) as batch_op:
        batch_op.alter_column('lmage',
               existing_type=sa.String(length=360),
               type_=mysql.VARCHAR(length=6000),
               nullable=False)

    # ### end Alembic commands ###

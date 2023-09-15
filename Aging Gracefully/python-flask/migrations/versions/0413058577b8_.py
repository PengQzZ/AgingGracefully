"""empty message

Revision ID: 0413058577b8
Revises: 7735d28f7082
Create Date: 2023-08-28 18:46:07.190565

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '0413058577b8'
down_revision = '7735d28f7082'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('static_2',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('lmage', sa.String(length=360), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('info')
    op.drop_table('pro_kind')
    op.drop_table('user_models')
    with op.batch_alter_table('userdb', schema=None) as batch_op:
        batch_op.drop_index('userdb_conmm__fk')
        batch_op.drop_constraint('userdb_ibfk_1', type_='foreignkey')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('userdb', schema=None) as batch_op:
        batch_op.create_foreign_key('userdb_ibfk_1', 'conmm', ['role'], ['id'])
        batch_op.create_index('userdb_conmm__fk', ['role'], unique=False)

    op.create_table('user_models',
    sa.Column('id primary_key', mysql.INTEGER(display_width=11), autoincrement=False, nullable=True),
    sa.Column('username', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('password', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('role', mysql.INTEGER(display_width=11), autoincrement=False, nullable=True),
    sa.Column('add_time', mysql.VARCHAR(length=255), nullable=True),
    mysql_default_charset='latin1',
    mysql_engine='InnoDB'
    )
    op.create_table('pro_kind',
    sa.Column('kind_id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('kind_name', mysql.VARCHAR(length=256), nullable=True),
    sa.PrimaryKeyConstraint('kind_id'),
    mysql_default_charset='latin1',
    mysql_engine='InnoDB'
    )
    op.create_table('info',
    sa.Column('product_id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('product_name', mysql.VARCHAR(length=256), nullable=True),
    sa.Column('product_kind', mysql.INTEGER(display_width=11), autoincrement=False, nullable=True),
    sa.Column('product_price', mysql.FLOAT(), nullable=True),
    sa.Column('product_address', mysql.VARCHAR(length=256), nullable=True),
    sa.Column('add_time', mysql.DATETIME(), nullable=True),
    sa.Column('update_time', mysql.DATETIME(), nullable=True),
    sa.ForeignKeyConstraint(['product_kind'], ['pro_kind.kind_id'], name='info_ibfk_1'),
    sa.PrimaryKeyConstraint('product_id'),
    mysql_default_charset='latin1',
    mysql_engine='InnoDB'
    )
    op.drop_table('static_2')
    # ### end Alembic commands ###